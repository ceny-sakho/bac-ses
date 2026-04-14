import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://evpfnfgsyeimmfhchfdk.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_T7yWLoHGwEb2hdXTvwYstQ_nGewm7_3';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
