import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://auyepscchdpkcqymkenk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF1eWVwc2NjaGRwa2NxeW1rZW5rIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg4NDM3NjAsImV4cCI6MjAwNDQxOTc2MH0.WWuSeak1UhKez1L3Amtlu04bU0XbqD_oSeinYItPlQY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
