(() => {
    const fullName = (firstName: string, LastName?: string, isUpper: Boolean = false): string => {
        if (isUpper) return `${firstName} ${LastName || '-'}`.toUpperCase();
        else return `${firstName} ${LastName || '-'}`;
    }

    const name = fullName('Miguel');
    console.log({ name })
})()