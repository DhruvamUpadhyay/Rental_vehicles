const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function testSelect() {
    console.log("Testing select leads...");
    const { data: leads, error: leadsError } = await supabase.from('leads').select('*');
    console.log("Leads:", leads, "Error:", leadsError);

    console.log("Testing select vendors...");
    const { data: vendors, error: vendorsError } = await supabase.from('vendors').select('*');
    console.log("Vendors:", vendors, "Error:", vendorsError);
}

testSelect();
