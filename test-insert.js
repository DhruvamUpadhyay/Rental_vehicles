const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function testInsert() {
    console.log("Testing insert...");
    const { data, error } = await supabase
        .from('leads')
        .insert([
            {
                customer_name: "Test Name",
                customer_phone: "1234567890",
                requirement_details: "Test detail",
                location_pincode: "123456",
                machine_id: null,
                status: 'new'
            }
        ]);

    if (error) {
        console.error("INSERT ERROR:", JSON.stringify(error, null, 2));
    } else {
        console.log("INSERT SUCCESS", data);
    }
}

testInsert();
