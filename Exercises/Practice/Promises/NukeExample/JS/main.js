
const initialJerusalemCode = 0000;

// jerusalem sends request to paris server
setTimeout(() => {
    // in paris
    // server checks initial code 
    if (initialJerusalemCode === 0000) {
        const response1 = { status: 200, data: { city: `paris`, code: 1111 } }
        // in jerusalem
        if (response1.status === 200) {
            // jerusalem sends request to shanghai server
            setTimeout(() => {
                // in shanghai
                // server checks paris code
                if (response1.data.code === 1111) {
                    const response2 = { status: 200, data: { city: `shanghai`, code: 2222 } }
                    //in jerusalem
                    if (response2.status === 200) {
                        // jerusalem sends request to washington server
                        setTimeout(() => {
                            // in washington
                            // server checks shanghai code
                            if (response2.data.code === 2222) {
                                const response3 = { status: 200, data: { city: `washington`, code: 3333 } }
                                // in jerusalem
                                if (response3.status === 200) {
                                    // jerusalem sends request to london
                                    setTimeout(() => {
                                        // in london
                                        // server checks london code
                                        if (response3.data.code === 3333) {
                                            const response4 = { status: 200, data: { city: `london`, code: 4444 } }
                                            // in jerusalem
                                            if (response4.status === 200) {
                                                console.log(`Launch Successful`);

                                            }
                                        }
                                    })
                                }
                            }
                        })
                    }
                }
            }, 8000)
        }
    }
}, 6000)


// jerusalem -->> paris
// paris -->> jerusalem
// jerusalem -->> shanghai
// shanghai -->> jerusalem
// jerusalem -->> washington
// washington -->> jerusalem
// jerusalem -->> london
// london -->> jerusalem
