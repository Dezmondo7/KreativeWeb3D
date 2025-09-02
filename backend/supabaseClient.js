import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY; // service role key
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;