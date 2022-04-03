function generateRequestId(): any {
    return Date.now() + Math.ceil(Math.random() * 9999)
}

export { generateRequestId }
