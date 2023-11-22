import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "./lib/types/supabase";

declare global {
	namespace App {
		interface Locals {
			supabase: SupabaseClient<Database>;
		};
	}
}

export {};
