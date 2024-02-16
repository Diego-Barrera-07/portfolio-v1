interface EmailValues {
    name: string;
    email: string;
    message: string;
}

export const sendEmail = async (values: EmailValues): Promise<void> => {
    await fetch("api/mail", {
        method: "post",
        body: JSON.stringify(values),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    });
};
