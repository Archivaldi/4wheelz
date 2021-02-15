const router = require("express").Router();
const Anvil = require("@anvilco/anvil");
const moment = require('moment');
const cloudinary = require('cloudinary').v2;
const keys = require('../../config/keys');
const extract = require('extract-zip');
const {anvil} = require("../../config/keys");
const request = require('request');
const { decryptRSA } = require('@anvilco/encryption');
var fs = require('fs');
const path = require('path');

const anvilClient = new Anvil({ apiKey: keys.anvil.apiKey });
cloudinary.config({ cloud_name: keys.cloudinary.cloud_name, api_key: keys.cloudinary.apikey, api_secret: keys.cloudinary.secret });

let groupEid = "";


router.get("/createEtchSigh", (req, res) => {

    const signer_1_email = "artur.markov1860@gmail.com";
    const signer_1_name = "Artur Markov";

    const signer_2_email = "archivaldi95@yandex.ru";
    const signer_2_name = "Nate Ryan";

    async function main() {
        const variables = getPacketVariables()
        const { data: result } = await anvilClient.createEtchPacket({ variables })
        const { data, errors } = result
        if (errors) {
            console.log('Error', errors)
        } else {
            console.log(data.createEtchPacket)
            groupEid = data.createEtchPacket.documentGroup.eid;
            console.log("GroupEid :", groupEid);
        }
    }

    function getPacketVariables() {
        return {
            isDraft: false,
            isTest: true,

            name: `Docs - ${signer_2_name}`,
            signatureEmailSubject: 'Docs ok',
            signatureEmailBody: 'Please sigh dosc...',

            files: [
                {
                    id: "bill_of_sale",
                    castEid: keys.anvil.bill_of_sale_id
                },
                {
                    id: "texas_title",
                    castEid: keys.anvil.title_id
                }
            ],

            data: {
                payloads: {
                    bill_of_sale: {
                        data: {
                            seller: "Artur Markov",
                            sellerStreet: "1403 Fort Lloyd Pl",
                            sellerCity: "Round Rock",
                            sellerState: "TX",
                            sellerZipCode: "78665",
                            sellerCounty: "Williamson",
                            buyer: "Nathaniel Ryan",
                            buyerStreet: "1700 W Parmer St",
                            buyerCity: "Austin",
                            buyerState: "TX",
                            buyerZipCode: "78727",
                            buyer_county: "Jefferson",
                            price: "10000",
                            carYear: "2015",
                            carMake: "Mazda",
                            carBody: "Minivan",
                            carModel: "5",
                            carVin: "1SG13VNSSDN45693",
                            carPlate: "NKR1897",
                            odometer: "77356",
                            dayMonth: moment().format("DD/MM"),
                            year: "21",
                            date: moment().format("MM/DD/YYYY"),
                        }
                    },
                    texas_title: {
                        data: {
                            carVin: "1SG13VNSSDN45693",
                            carYear: "2015",
                            carMake: "Mazda",
                            carBody: "Minivan",
                            carModel: "5",
                            carPlate: "NKR1897",
                            odometer: "77356",
                            seller: "Artur Markov",
                            sellerFullAddress: "1403 Fort Lloyd Pl, Round Rock, TX, 78665",
                            date: moment().format("MM/DD/YYYY")
                        }
                    }
                }
            },

            signers: [
                {
                    id: "artur",
                    name: "Artur Markov",
                    email: "artur.markov1860@gmail.com",

                    fields: [
                        {
                            fileId: 'bill_of_sale',
                            fieldId: 'sellerSign'
                        },
                        {
                            fileId: "texas_title",
                            fieldId: "sellerSign"
                        }
                    ]
                },
                {
                    id: "nate",
                    name: "Nate Ryan",
                    email: "archivaldi95@yandex.ru",
                    fields: [
                        {
                            fileId: "bill_of_sale",
                            fieldId: "buyerSign"
                        }
                    ]
                }
            ]
        }
    }


    function run(fn) {
        fn().then(() => {
            //process.exit(0);
            res.send({ message: "Succsess!" })
        }).catch((err) => {
            console.log(err.stack || err.message)
            process.exit(1)
        })
    }

    run(main);
});

router.post("/hooks", async (req,res) => {

    let bill_of_sale_url = "";
    let title_url = "";

    const {action} = req.body;
    if (action === "etchPacketComplete"){
        const {data} = req.body;
        const decryptedRSAMessage = await decryptRSA(anvil.private_key, data)
        const info = await JSON.parse(decryptedRSAMessage);
        console.log(info)
        const {eid} = info.documentGroup;
        console.log("Eid: ",ied)
        //if (eid === req.session.group_id){
        if (eid){

            async function main() {
                try {
                    const { statusCode, response, data, errors } = await anvilClient.downloadDocuments(eid, {});
                    if (statusCode === 200){
                        fs.writeFileSync('output.zip', data, {encoding: null});
                        await (extract(path.join(__dirname, "../../output.zip"), {dir: path.join(__dirname, `../../Unzip/${groupEid}`)}));
                        const files = fs.readdirSync(path.join(__dirname, `../../Unzip/${groupEid}`));
                        console.log(files);
                        for (let i = 0; i < files.length; i++){
                            let {secure_url} = await cloudinary.uploader.upload(path.join(__dirname, `../../Unzip/${groupEid}/${files[i]}`));
                            if (i === 0){
                                bill_of_sale = secure_url;
                            } else {
                                title_url = secure_url;
                            }
                        };

                        console.log(console.log("Bill Of Sale url: ", bill_of_sale_url));
                        console.log(console.log("Title url: ", title_url));

                    } else {
                        console.log(JSON.stringify(errors, null,2));
                        res.send({statusCode: 200});
                    }
                } catch(error) {
                    console.log(error);
                    res.send({statusCode: 200});
                }
            }
        
            main()
                .then(() => {
                    console.log("Sending request to db.....");
                    const payloads = {
                        url: "https://desolate-hollows-77552.herokuapp.com/api/db/updateUrls",
                        method: "POST",
                        body: {bill_of_sale, title_url},
                    };
                    request(payloads, (error, response, body) => {
                        if (error) throw error;
                        else {
                            console.log(response);
                            console.log(body);
                            res.send({statusCode: 200});
                        };
                    });
                })
                .catch((err) => {
                    console.log(err.stack || err.message);
                    res.send({statusCode: 200});
                    process.exit(1);
                })
        } else {
            res.send({statusCode: 200});
        }
    } else {
        res.send({statusCode: 200});
    };
});


router.get("/download", (req, res) => {

    async function main() {
        try {
            const { statusCode, response, data, errors } = await anvilClient.downloadDocuments(groupEid, {});
            if (statusCode === 200){
                fs.writeFileSync('output.zip', data, {encoding: null});
                await (extract(path.join(__dirname, "../../output.zip"), {dir: path.join(__dirname, `../../Unzip/${groupEid}`)}));
                const files = fs.readdirSync(path.join(__dirname, `../../Unzip/${groupEid}`));
                console.log(files);
                for (let i = 0; i < files.length; i++){
                    const {secure_url} = await cloudinary.uploader.upload(path.join(__dirname, `../../Unzip/${groupEid}/${files[i]}`));
                    console.log(secure_url);
                }

            } else {
                console.log(JSON.stringify(errors, null,2))
            }
        } catch(error) {
            console.log(error);
        }
    }

    main()
        .then(() => {
            res.send({ message: "Succsess!" })
        })
        .catch((err) => {
            console.log(err.stack || err.message);
            process.exit(1);
        })

});

module.exports = router;