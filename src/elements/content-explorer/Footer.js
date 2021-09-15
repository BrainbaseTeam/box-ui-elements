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
import {FormattedMessage} from 'react-intl';
import messages from 'elements/common/messages';

type Props = {
    children: React.Node,
};

const Footer = ({
    pickedCount,
    onBatchCancel,
    onBatchDownload,
    children
}: Props) => (
    <footer className="bce-footer">
        <div className="bce-footer-left">
            {children}
        </div>
        <div className="bce-footer-right">
            {pickedCount > 0 && (
            <ButtonGroup>
                <Button onClick={onBatchCancel} type="button">
                    <FormattedMessage {...messages.cancel} />
                </Button>
                <PrimaryButton onClick={onBatchDownload} type="button">
                    <FormattedMessage {...messages.download} />
                </PrimaryButton>
            </ButtonGroup>
            )}
        </div>
    </footer>
);

export default Footer;
