import { createClient } from "@supabase/supabase-js"

const url: string = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const publicKey: string = process.env.NEXT_PUBLIC_SUPABASE_PUBLIC_KEY || "";

export const supabase: any = createClient(url, publicKey);