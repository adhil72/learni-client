
class AsyncLoop {
    modifiedData: any[] = []
    i: number = 0

    run(data: any[], callback: any) {
        this.modifiedData = data
        return new Promise<any>((r) => {
            this.processData(data, callback, () => {
                r(this.modifiedData)
            })
        })
    }

    async processData(data: any[], callback: any, onDone: any) {
        let obj = data[this.i]
        if (obj) {
            let md = await callback(obj, this.i)
            this.modifiedData[this.i] = md
            this.i++
            this.processData(data, callback, onDone)
        } else {
            onDone()
        }
    }

}


export default AsyncLoop