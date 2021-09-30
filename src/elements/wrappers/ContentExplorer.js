/**
 * @flow
 * @file Base class for the Content Explorer ES6 wrapper
 * @author Box
 */

import React from 'react';
import { render } from 'react-dom';
import ES6Wrapper from './ES6Wrapper';
import ContentExplorerReactComponent from '../content-explorer';
import type { BoxItem } from '../../common/types/core';

class ContentExplorer extends ES6Wrapper {
    /**
     * Callback for selecting files
     *
     * @param {Array} data - chosen box items
     * @return {void}
     */
    onSelect = (data: BoxItem[]): void => {
        this.emit('select', data);
    };

    /**
     * Callback for navigating into a folder
     *
     * @param {Object} data - chosen box items
     * @return {void}
     */
    onNavigate = (data: BoxItem): void => {
        this.emit('navigate', data);
    };

    /**
     * Callback for renaming file
     *
     * @return {void}
     */
    onRename = (data: BoxItem): void => {
        this.emit('rename', data);
    };

    /**
     * Callback for previewing a file
     *
     * @return {void}
     */
    onPreview = (data: BoxItem): void => {
        this.emit('preview', data);
    };

    /**
     * Callback for downloading a file
     *
     * @return {void}
     */
    onDownload = (data: BoxItem[]): void => {
        this.emit('download', data);
    };

    /**
     * Callback for deleting a file
     *
     * @return {void}
     */
    onDelete = (data: BoxItem[]): void => {
        this.emit('delete', data);
    };

    /**
     * Callback for uploading a file
     *
     * @return {void}
     */
    onUpload = (data: BoxItem[]): void => {
        this.emit('upload', data);
    };

    /**
     * Callback for creating a folder
     *
     * @return {void}
     */
    onCreate = (data: BoxItem): void => {
        this.emit('create', data);
    };

    /**
     * Callback for batch download start
     *
     * @return {void}
     */
    onBatchDownload = (data: BoxItem[]): void => {
        this.emit('batchDownload', data);
    };

    /**
     * Callback for batch manage tags
     *
     * @return {void}
     */
     onBatchManageTags = (data: BoxItem[]): void => {
        this.emit('batchManageTags', data);
    };

    /**
     * Callback for batch download cancel
     *
     * @return {void}
     */
    onBatchCancel = (): void => {
        this.emit('batchCancel');
    };

    /**
     * Callback for custom share
     *
     * @return {void}
     */
    onCustomShare = (data: BoxItem): void => {
        this.emit('customShare', data);
    };

    /**
     * Callback for moving items
     *
     * @return {void}
     */
    onMoveTo = (data: BoxItem): void => {
        this.emit('moveTo', data);
    };

    /**
     * Callback for managing tags items
     *
     * @return {void}
     */
     onManageTags = (data: BoxItem): void => {
        this.emit('manageTags', data);
    };

    /**
     * Callback for copying items
     *
     * @return {void}
     */
    onCopy = (data: BoxItem): void => {
        this.emit('copy', data);
    };

    /**
     * Callback for setting custom thumbnail
     *
     * @return {void}
     */
    onSetThumbnail = (data: BoxItem): void => {
        this.emit('setThumbnail', data);
    };

    /**
     * Callback for removing custom thumbnail
     *
     * @return {void}
     */
    onRemoveThumbnail = (data: BoxItem): void => {
        this.emit('removeThumbnail', data);
    };

    /**
     * Helper to programatically navigate
     *
     * @param {string} id - string folder id
     * @return {void}
     */
    navigateTo(id: string): void {
        const component = this.getComponent();
        if (component && typeof component.clearCache === 'function') {
            component.fetchFolder(id);
        }
    }

    /** @inheritdoc */
    render() {
        render(
            <ContentExplorerReactComponent
                language={this.language}
                messages={this.messages}
                rootFolderId={this.id}
                token={this.token}
                componentRef={this.setComponent}
                onDelete={this.onDelete}
                onDownload={this.onDownload}
                onPreview={this.onPreview}
                onRename={this.onRename}
                onSelect={this.onSelect}
                onUpload={this.onUpload}
                onCreate={this.onCreate}
                onNavigate={this.onNavigate}
                onInteraction={this.onInteraction}
                onBatchDownload={this.onBatchDownload}
                onBatchManageTags={this.onBatchManageTags}
                onBatchCancel={this.onBatchCancel}
                onCustomShare={this.onCustomShare}
                onMoveTo={this.onMoveTo}
                onManageTags={this.onManageTags}
                onCopy={this.onCopy}
                onSetThumbnail={this.onSetThumbnail}
                onRemoveThumbnail={this.onRemoveThumbnail}
                {...this.options}
            />,
            this.container,
        );
    }
}

global.Box = global.Box || {};
global.Box.ContentExplorer = ContentExplorer;
export default ContentExplorer;
