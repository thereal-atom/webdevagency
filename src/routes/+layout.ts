import type { Database } from "../lib/types/supabase";
import type { LayoutLoad } from "./$types";
import {
    PUBLIC_SUPABASE_ANON_KEY,
    PUBLIC_SUPABASE_URL,
} from "$env/static/public";
import { createSupabaseLoadClient } from "@supabase/auth-helpers-sveltekit";
import { inject } from "@vercel/analytics";
import { dev } from "$app/environment";
 
inject({ mode: dev ? 'development' : 'production' });

export const load = (async ({
    fetch,
    depends,
}) => {
    depends("supabase:auth");

    const supabase = createSupabaseLoadClient<Database>({
        supabaseUrl: PUBLIC_SUPABASE_URL,
        supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
        event: { fetch },
        serverSession: null,
    });

    return { supabase };
}) satisfies LayoutLoad;