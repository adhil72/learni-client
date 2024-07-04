class AsyncLoop {
    modifiedData: any[] = []
    i: number = 0

    run<T>(data: T[], callback: any) {
        this.modifiedData = data
        return new Promise<T[]>((r) => {
            this.processData(data, callback, () => {
                r(this.modifiedData)
            })
        })
    }

    async processData<T>(data: T[], callback: any, onDone: any) {
        const obj = data[this.i]
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
