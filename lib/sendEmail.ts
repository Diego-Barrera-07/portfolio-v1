interface EmailValues {
    name: string;
    email: string;
    message: string;
}

export const sendEmail = async (values: EmailValues): Promise<Response> => {
   const response = await fetch("api/mail", {
        method: "post",
        body: JSON.stringify(values),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    });

    return response;
};
