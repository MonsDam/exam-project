import { createClient } from '@supabase/supabase-js'

const supabaseKey ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhaGl0ampra3FhZGN1cHhtdGZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ2NzkyMzQsImV4cCI6MjAyMDI1NTIzNH0.7flvDW9JJLPXluBtGrivdfhO5vJZsf3fqHCxfh-u6vg';
const supabaseUrl = 'https://sahitjjkkqadcupxmtfl.supabase.co';

export const supabase = createClient(supabaseUrl, supabaseKey)