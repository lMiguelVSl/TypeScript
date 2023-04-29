(() => {
    const fullName = (firstName: string, LastName: string): string => {
        return `${firstName} ${LastName}`;
    }

    const name = fullName('Miguel', 'Vargas');
    console.log({ name })
})()