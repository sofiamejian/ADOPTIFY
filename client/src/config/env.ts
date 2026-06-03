export const env = {
  apiUrl: import.meta.env.VITE_API_URL as string,
  supabaseUrl: import.meta.env.VITE_SUPABASE_URL as string,
  supabaseAnonKey: import.meta.env.VITE_SUPABASE_ANON_KEY as string,
}

if (!env.apiUrl || !env.supabaseUrl || !env.supabaseAnonKey) {
  throw new Error('Missing required VITE_ environment variables')
}
