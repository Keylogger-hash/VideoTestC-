import './UploadFile.css'
import React, { useState } from 'react';
import { UploadContent } from './UploadContent/UploadContent';
import {UploadTitle} from './UploadTitle/UploadTitle';
import { UploadButton } from './UploadButton/UploadButton';
import { UploadAlt } from './UploadAlt/UploadAlt';
import ResizeOptions from '../ResizeOptions/ResizeOptions';
export function UploadFile(){

    return (
        <div className="tool">
            <div className="tool-workarea">
                <div>
                    <UploadTitle></UploadTitle>
                    <UploadContent></UploadContent>
                    <UploadButton></UploadButton>
                    <UploadAlt></UploadAlt>
                </div>
                {/* <div id='resize-options' className='hidden'>
                    <ResizeOptions></ResizeOptions>
                </div> */}
            </div>
        </div>


    )
}