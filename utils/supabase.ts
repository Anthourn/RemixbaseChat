
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rsgmzgfydxpjeifkhbkx.supabase.co'
const supabaseKey = process.env.SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey!)

export default supabase