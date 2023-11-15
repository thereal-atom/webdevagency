import config from "$lib/config";

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ request }) => {
        const form = await request.formData();

        const data = {
            email: form.get("email"),
            name: form.get("name"),
            message: form.get("message"),
        };

        try {
            await fetch(config.webhookUrl, {
                method: "POST",
                body: JSON.stringify(data),
            });

            return { success: true };
        } catch (err) {
            console.error(err);

            return { error: err.message };
        };
    },
};