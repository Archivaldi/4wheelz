import React, { useState } from 'react';
import {
    Card,
    CardContent,
    Typography,
    Button
} from '@material-ui/core';
import FileUploadDialog from './FileUploadDialog';
import ViewDocumentDialog from './ViewDocumentDialog';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import { useStyles } from '../styles/FileUploadCardStyles';

export default function FileUploadCard({ type, completed }) {
    const { root, flex, icon, font } = useStyles();
    const [uploadOpen, setUploadOpen] = useState(false);
    const [documentOpen, setDocumentOpen] = useState(false);

    const handleClickUploadOpen = () => {
        setUploadOpen(true);
    };

    const handleUploadClose = () => {
        setUploadOpen(false);
    };

    const handleDocumentOpen = () => {
        setDocumentOpen(true);
    };

    const handleDocumentClose = () => {
        setDocumentOpen(false);
    };

    return (
        <Card className={root}>
            <FileUploadDialog
                open={uploadOpen}
                handleUploadClose={handleUploadClose}
                type={type}
            />
            <ViewDocumentDialog
                open={documentOpen}
                handleDocumentClose={handleDocumentClose}
                type={type}
            />
            <CardContent className={flex}>
                <Typography className={font} color="textSecondary">
                    <AttachFileIcon
                        className={icon}
                        color={!completed ? "primary" : "secondary"}
                    />
                    {`${type}`.toUpperCase()}
                </Typography>
                <div>
                    <Button
                        disabled={completed}
                        className={font}
                        color="secondary"
                        onClick={handleClickUploadOpen}
                    >
                        Upload{completed ? 'ed' : ''}
                    </Button>
                    <Button
                        disabled={!completed}
                        className={font}
                        color="secondary"
                        onClick={handleDocumentOpen}
                    >
                        View Document
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}