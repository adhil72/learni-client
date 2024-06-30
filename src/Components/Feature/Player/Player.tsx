"use client";

import AsyncLoop from '@/Utils/AsyncLoop';
import { Box, Button, CircularProgress, Dialog, TextField, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'
import GeneratePopup from './GeneratePopup';
import { audioFile, generateParagraphScript } from '@/api/controllers/ai.api';

function Player() {

    const titleRef = useRef<HTMLHeadingElement>()
    const bodyDivRef = useRef<HTMLDivElement>()

    const [paragraphInput, setParagraphInput] = useState(false)
    const [generating, setGenerating] = useState(false)

    const clearBoard = async () => {
        if (!titleRef.current) return
        if (!bodyDivRef.current) return

        bodyDivRef.current.innerHTML = ''

        for (let i = 0; i < titleRef.current.innerText.length; i++) {
            setTimeout(() => {
                if (!titleRef.current) return
                if (!bodyDivRef.current) return
                titleRef.current.innerText = titleRef.current.innerText.slice(0, -1)
            }, i * 40)
        }
        await new Promise(resolve => setTimeout(resolve, (titleRef.current?.innerText?.length || 1) * 40))
    }

    const playAudio = (src: string) => {
        return new Promise((resolve, reject) => {
            let au = document.getElementById("audioPlayer") as any
            if (!au) return
            au.src = src;
            au.play();
            au.onended = () => {
                resolve(null)
            }
        })
    }

    const setTitle = async (title: string) => {
        if (!titleRef.current) return
        titleRef.current.innerText = title
    }

    const addText = async (text: string) => {
        if (!bodyDivRef.current) return
        bodyDivRef.current.innerHTML += text + '</br>'
        scrollToBottom()
        return
    }

    const addImage = async (src: string, alt: string) => {
        console.log('adding image')
        if (!bodyDivRef.current) return

        const image = new Image();
        image.src = src;
        image.alt = alt;
        image.style.width = '400px';
        image.style.height = 'auto';

        await new Promise((resolve, reject) => {
            image.onload = () => {
                bodyDivRef.current?.appendChild(image);
                bodyDivRef.current?.appendChild(document.createElement('br'));
                resolve(null);
            };
            image.onerror = () => {
                reject(new Error('Failed to load image'));
            };
        });

        scrollToBottom();
        return;
    }

    const scrollToBottom = () => {
        if (!bodyDivRef.current) return
        bodyDivRef.current.scrollTo({
            top: bodyDivRef.current.scrollHeight,
            behavior: 'smooth'
        });
    }

    const sleep = (ms: number) => {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    const generate = (para: string) => {
        setGenerating(true)
        generateParagraphScript(para, '').then((data) => {
            data.data.forEach(async (item: string) => {
                console.log(item)
            })

            setGenerating(false)
            setParagraphInput(false)
            new AsyncLoop().run((data.data), async (item: string) => {
                if (item.includes('<title>')) {
                    await setTitle(item.replace('<title>', '').replace('</title>', ''))
                } else if (item.includes('<wrt>')) {
                    await addText(item.replace('<wrt>', '').replace('</wrt>', ''))
                } else if (item.includes('<img>')) {
                    await addImage(item.replace('<img>', '').replace('</img>', ''), 'Image')
                } else if (item.includes('<aud>')) {
                    await playAudio(audioFile(item.replace('<aud>', '').replace('</aud>', '')))
                }
                await sleep(300)
            })
        })
    }

    useEffect(() => {

    }, [])


    return (
        <div style={{ width: '100%', height: '100vh' }}>
            <GeneratePopup paragraphInput={paragraphInput} setParagraphInput={setParagraphInput} generate={generate} generating={generating} />
            <center>
                <div style={{ marginTop: '100px' }}>
                    <Button onClick={() => setParagraphInput(true)} color='success' variant='contained'>Generate</Button>
                    <br />
                    <br />

                </div>
                <audio id='audioPlayer' src='' muted controls style={{}} ></audio>
            </center>
        </div>
    )
}

export default Player