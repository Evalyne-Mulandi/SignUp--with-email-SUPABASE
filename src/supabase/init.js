
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mohfultvbzlkahggbnxx.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1vaGZ1bHR2Ynpsa2FoZ2dibnh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg1MTYyMTcsImV4cCI6MTk4NDA5MjIxN30.KCNzdXJHbheJy4UODDMoC0J5-aAqLMkShGanSz396aY'
 export const supabase = createClient(supabaseUrl, supabaseKey)
