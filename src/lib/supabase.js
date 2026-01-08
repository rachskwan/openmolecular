import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cnczdlkgjlnhqxdorjnp.supabase.co';
const supabaseAnonKey = 'sb_publishable_wtHIijC49H-3AHQivwUPjg_lFa1xmGk';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
