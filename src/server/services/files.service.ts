
const getFile = async (data: { name: string }) => {
    const fileName = data.name
    const filePath = process.cwd() + `/public/audio/${fileName}`
    // res.download(filePath)
}

export default { getFile }