(() => {
    const fullName = (firstName: string, LastName?: string): string => {
        return `${firstName} ${LastName || '-'}`;
    }

    const name = fullName('Miguel');
    console.log({ name })
})()