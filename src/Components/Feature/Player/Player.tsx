import Button from "@/Components/Common/Button"
import AsyncLoop from "@/Utils/AsyncLoop"
import { instance } from "@/api/instance"
import { useEffect, useRef, useState } from "react"
import { BiPlay } from "react-icons/bi"

export default function Player({ data }: { data: string[] }) {

    const titleRef = useRef<HTMLHeadingElement>(null)
    const bodyDivRef = useRef<HTMLDivElement>(null)
    const scrollDivRef = useRef<HTMLDivElement>(null)

    const [playing, setPlaying] = useState(false)

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

    const setTitle = async () => {
        if (!titleRef.current) return
        for (let i = 0; i < data.length; i++) {
            const item = data[i];
            if (!item) continue
            if (item.includes("<h1>") && item.includes("</h1>")) {
                let title = item.replace("<h1>", "").replace("</h1>", "").replace("<wrt>", "").replace("</wrt>", "")
                titleRef.current.innerText = title
                break;
            }
        }
    }

    const addText = async (text: string) => {
        if (!bodyDivRef.current) return
        if (!text) return
        if (!text.includes("<") && !text.includes(">")) {
            await typeWithAnimation(text, bodyDivRef.current)
            loadMathJax()
            scrollToBottom()
            return
        }
        bodyDivRef.current.innerHTML += text
        let e = bodyDivRef.current.lastChild
        if (!e) return
        let textToType = (e as any).innerText || "error"
        e.textContent = ''
        await typeWithAnimation(textToType, e)
        loadMathJax()
        scrollToBottom()
        return
    }

    const loadMathJax = () => {
        if (typeof (window as any)?.MathJax !== "undefined") {
            (window as any).MathJax.typeset()
        } else {
            console.log('MathJax not loaded');
        }
    }

    const typeWithAnimation = async (text: string, div: any) => {
        return new Promise((resolve, reject) => {
            let i = 0;
            const interval = setInterval(() => {
                div.innerHTML += text[i];
                if (text[i] === "$") loadMathJax()
                i++;
                if (i > text.length - 1) {
                    clearInterval(interval);
                    resolve(null)
                }
            }, 40)
        })
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
        if (!scrollDivRef.current) return
        scrollDivRef.current.scrollTo({
            top: scrollDivRef.current.scrollHeight,
            behavior: 'smooth'
        });
    }

    const sleep = (ms: number) => {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    const play = async () => {
        setPlaying(true)
        const d = [...data]
        new AsyncLoop().run(d, async (item: string) => {
            if (item.includes("<wrt>") && item.includes("</wrt>")) {
                let text = item.replace("<wrt>", "").replace("</wrt>", "")
                await addText(text)
            } else if (item.includes("<img>") && item.includes("</img>")) {
                let src = item.replace("<img>", "").replace("</img>", "")
                await addImage(src, 'image')
            } else if (item.includes("<aud>") && item.includes("</aud>")) {
                let src = item.replace("<aud>", "").replace("</aud>", "")
                await playAudio(`/audio/${src}`)
            } else if (item.includes("<clr></clr>")) {
                await clearBoard()
            }
        }).then(async () => {
            setPlaying(false)
        })
    }

    useEffect(() => {
        setTitle()
    })

    return (
        <div className="w-full h-full flex items-center justify-center bg-slate-800 rounded-lg relative overflow-hidden">
            <div ref={scrollDivRef} className="w-full h-full overflow-y-auto">
                <div className="p-5">
                    <div
                        ref={bodyDivRef}
                        className="text-white text-md font-normal mt-2"
                        style={{ width: "100%", height: "100%" }}
                    ></div>
                </div>
            </div>
            {!playing && <div className={`absolute w-full h-full flex items-center justify-center bg-slate-800 bg-opacity-50`}>
                <div className="w-full h-full relative flex items-center justify-center flex-col">
                    <Button onClick={play} className="bg-white rounded-full p-3 top-1/2">
                        <BiPlay className="text-slate-800 text-2xl" />
                    </Button>
                    <span ref={titleRef} className="text-md animate-slide-down-fade text-white font-bold line-clamp-1"></span>

                </div>
            </div>}
            <audio id="audioPlayer" src=""></audio>
        </div>
    );
}