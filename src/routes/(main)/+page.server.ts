import type { Actions } from "@sveltejs/kit";
// import config from "$lib/config";

export const actions = {
    default: async ({
        request,
        locals,
    }) => {
        const form = await request.formData();

        const data = {
            email: form.get("email"),
            name: form.get("name"),
            message: form.get("message"),
            free: false,
        };

        try {
            const { error } = await locals.supabase
                .from("message")
                .insert({
                    email: data.email?.toString() || "",
                    message: data.message?.toString() || "",
                    isFreeRequest: false,
                    name: data.name?.toString(),
                });

            if (error) throw error;

            return { success: true };
        } catch (err: unknown) {
            console.error(err);

            return { error: err.message };
        };
    },
} satisfies Actions;