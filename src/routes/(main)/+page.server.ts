import type { Actions } from "@sveltejs/kit";
import config from "$lib/config";

export const actions = {
    default: async ({ request }) => {
        const form = await request.formData();

        const data = {
            email: form.get("email"),
            name: form.get("name"),
            message: form.get("message"),
            free: false,
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
} satisfies Actions;