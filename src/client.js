import { createClient } from '@supabase/supabase-js';

const URL = 'https://boncvqnocfokkaxqeili.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJvbmN2cW5vY2Zva2theHFlaWxpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg4OTg0MDMsImV4cCI6MjAxNDQ3NDQwM30.OpDa_p4lXwnQoPwQQNx0_6FkxLaCSncyArwwFq0flLY'

export const supabase = createClient(URL, API_KEY);