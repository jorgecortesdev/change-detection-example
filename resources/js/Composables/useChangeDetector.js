let useChangeDetector = (model) => {
    const initialValue = Object.assign({}, model)

    const hasChanged = () => {
        return Object.keys(model).some(key => {
            return model[key] !== initialValue[key]
        })
    }

    const restore = () => {
        Object.keys(model).forEach(key => {
            model[key] = initialValue[key]
        })
    }

    return {
        hasChanged,
        restore
    }
}

export default useChangeDetector