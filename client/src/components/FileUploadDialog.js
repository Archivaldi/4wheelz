import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
}));

export default function FileUploadDialog({ open, handleUploadClose, type }) {
    const classes = useStyles()
    const [checked, setChecked] = useState(false);
    const handleChange = () => {
        setChecked(!checked);
    };

    return (
        <div>
            <Dialog
                color="dark"
                open={open}
                onClose={handleUploadClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{`Upload ${type} Document`}</DialogTitle>
                <DialogContent>
                    {type === 'Bill of Sale' ? (
                        <form className={classes.root} noValidate autoComplete="on">
                            <TextField color="secondary" id="standard-required" label="First Name" required />
                            <TextField color="secondary" id="standard-required" label="Last Name" required />
                            <TextField color="secondary" id="standard-required" label="Vin Number" required />
                            <TextField color="secondary" id="standard-required" label="Chassis Year" required />
                            <TextField color="secondary" id="standard-required" label="Model" required />
                            <TextField color="secondary" id="standard-required" label="Title #" required />
                            <TextField color="secondary" id="standard-required" label="Milage" required />
                            <TextField color="secondary" id="standard-required" label="Price" required />
                            <FormControlLabel
                                control={<Checkbox checked={checked} onChange={handleChange} />}
                                label="Apply Signature"
                            />
                        </form>
                    ) : (
                            <FormGroup>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    component="label"
                                >
                                    Upload {type}
                                    <input
                                        type="file"
                                        hidden
                                    />
                                </Button>
                                <FormControlLabel
                                    control={<Checkbox checked={checked} onChange={handleChange} />}
                                    label="Apply Signature"
                                />
                            </FormGroup>
                        )}
                </DialogContent>
                <DialogActions>
                    <Button color="secondary">
                        Submit
                    </Button>
                    <Button onClick={handleUploadClose} color="secondary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}