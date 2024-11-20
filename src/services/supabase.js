import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://ncegjendqcyywjopxcoq.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jZWdqZW5kcWN5eXdqb3B4Y29xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA3MjY4MzIsImV4cCI6MjA0NjMwMjgzMn0.5r6nnvg1FWccmq3jLs1bHgI8dRvDaFKJ1o5ZVIrn3JI"
const supabase = createClient(supabaseUrl, supabaseKey)


export default supabase;