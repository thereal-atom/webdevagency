import type { Handle } from "@sveltejs/kit";
import { createSupabaseServerClient } from "@supabase/auth-helpers-sveltekit";
import {
	PUBLIC_SUPABASE_URL,
	PUBLIC_SUPABASE_ANON_KEY,
} from "$env/static/public";

export const handle: Handle = async ({
    event,
    resolve,
}) => {
	event.locals.supabase = createSupabaseServerClient({
		supabaseUrl: PUBLIC_SUPABASE_URL,
		supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
		event,
	});

    return resolve(event, {
        filterSerializedResponseHeaders(name) {
            return name === "content-range";
        },
    });
};