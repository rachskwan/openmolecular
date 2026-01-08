import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cnczdlkgjlnhqxdorjnp.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNuY3pkbGtnamxuaHF4ZG9yam5wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc4OTg1ODEsImV4cCI6MjA4MzQ3NDU4MX0.tD6vuuWVevx9tXwCWkhe_dgHLWkfwdnbonQlTS-4sMY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
