import { RiAiGenerate } from "react-icons/ri";
import { motion } from "framer-motion";
import { useState } from "react";
import { GiPenguin } from "react-icons/gi";
import { generateParagraphScript } from "@/api/controllers/ai.api";
import Player from "../Player/Player";

export default function Chat() {

    const [generating, setGenerating] = useState(false)
    const [script, setScript] = useState([])

    const handleFormSubmit = (e: any) => {
        e.preventDefault()
        setScript([])
        setGenerating(true)
        let prompt = e.target.prompt.value
        generateParagraphScript(prompt).then(({data})=>{
            setScript(data)
        }).catch((err)=>{
            console.log(err);
        }).finally(()=>{
            setGenerating(false)
        })
    }

    return <div className={`bg-gradient-to-r from-purple-600 to-pink-500 w-full h-screen flex justify-center items-center ${generating && "animate-gradient-flow"}`}>
        <div className="w-[90%] md:w-[600px]">
            <div
                className="w-full h-[400px] bg-white bg-opacity-50 rounded-2xl flex justify-center items-center flex-col">
                {
                    script.length===0?<motion.span
                    animate={generating ? {
                        translateY: [-10, 0, 10, 0],
                        transition: {
                            repeat: Infinity,
                            duration: 1
                        }
                    } : {}}
                    className={`text-white text-8xl`}>
                    <GiPenguin />
                </motion.span>:
                <div className={`w-[95%] h-[93%]`}>
                    <Player data={script}/>
                </div>
                }
            </div>

            <motion.form
                onSubmit={handleFormSubmit}
                initial={{
                    boxShadow: "none"
                }}
                animate={generating ? {
                    boxShadow: [
                        '0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.5), 0 0 30px rgba(255, 255, 255, 0.5), 0 0 40px rgba(255, 255, 255, 0.5)',
                        '0 0 20px rgba(255, 255, 255, 1), 0 0 30px rgba(255, 255, 255, 1), 0 0 40px rgba(255, 255, 255, 1), 0 0 50px rgba(255, 255, 255, 1)',
                        '0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.5), 0 0 30px rgba(255, 255, 255, 0.5), 0 0 40px rgba(255, 255, 255, 0.5)',
                    ],
                    transition: {
                        duration: 0.5,
                        ease: "easeInOut",
                        loop: Infinity,
                        repeatDelay: 3
                    }
                } : {}}
                className={`w-full bg-white rounded-2xl p-3 flex justify-between mt-5`}>
                <motion.input
                    name="prompt"
                    initial={{
                        width: "95%",
                    }}

                    animate={{
                        width: generating ? "0%" : "95%",
                        transition: {
                            duration: 0.1
                        }
                    }}
                    type="text" className={`text-lg outline-none border-none`} placeholder="What is lorentz force" />
                <motion.button
                    type="submit"
                    className={`${generating ? "bg-gradient-to-r to-purple-600 from-pink-500" : "bg-purple-600"} trans flex items-center flex-1 px-3 py-2 w-[40px] rounded-xl z-10 text-white hover:bg-purple-800 active:bg-purple-500`}
                >
                    <span>
                        <RiAiGenerate />
                    </span>
                    {generating && <motion.div
                        initial={{ display: "none", opacity: 0.5 }}
                        animate={{
                            display: "flex",
                            opacity: 1,
                            translateY: [-10, 0],
                            transition: {
                                delay: 0.2,
                                duration: 0.2
                            }
                        }}
                        exit={{
                            translateY: [0, -10],
                            transition: {
                                delay: 0.2
                            }
                        }}
                        className="z-20 flex justify-center ml-3">
                        <span className={`text-lg`}>Generating</span>
                    </motion.div>}
                    <div>
                        <span className={`text-lg invisible`}>A</span>
                    </div>
                </motion.button>
            </motion.form>
        </div>
    </div>
}