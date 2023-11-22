import type { Actions } from "@sveltejs/kit";

export const actions = {
    default: async ({
        request,
        locals,
    }) => {
        const form = await request.formData();

        try {
            const { error } = await locals.supabase
                .from("message")
                .insert({
                    email: form.get("email")?.toString() || "",
                    message: "",
                    isFreeRequest: true,
                    name: "",
                });

            if (error) throw error;

            return { success: true };
        } catch (err) {
            console.error(err);

            return { error: err.message };
        };
    },
} satisfies Actions;