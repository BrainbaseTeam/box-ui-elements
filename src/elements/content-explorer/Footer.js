/**
 * @flow
 * @file Footer component
 * @author Box
 */

import * as React from 'react';
import Button from '../../components/button';
import ButtonGroup from '../../components/button-group';
import PrimaryButton from '../../components/primary-button';
import './Footer.scss';

type Props = {
    children: React.Node,
};

const Footer = ({
    onBatchCancel,
    onBatchDownload,
    children
}: Props) => (
    <footer className="bce-footer">
        <div className="bce-footer-left">
            {children}
        </div>
        <div className="bce-footer-right">
            <ButtonGroup>
                <Button onClick={onBatchCancel} type="button">
                    Cancel
                </Button>
                <PrimaryButton onClick={onBatchDownload} type="button">
                    Download
                </PrimaryButton>
            </ButtonGroup>
        </div>
    </footer>
);

export default Footer;
