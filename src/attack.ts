
const BASE_URL = "http://localhost:3000"

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms))

const botAttack = async () => {
    console.log("🤖 Bot attack started...\n")

    let sessionCookie = ""

    const fakeIPs = [
        "192.168.1.1",
        "192.168.1.2",
        "192.168.1.3",
        "192.168.1.4",
        "192.168.1.5",
    ]

    // Step 1 — get session cookie first
    const initRes = await fetch(`${BASE_URL}/`, {
        headers: { "X-Forwarded-For": fakeIPs[0] }
    })
    const setCookie = initRes.headers.get("set-cookie")
    if (setCookie) {
        sessionCookie = setCookie.split(";")[0]
        console.log(`🍪 Session captured: ${sessionCookie}\n`)
    } else {
        console.log("⚠️  No session cookie — impossible travel won't trigger")
        console.log("    Add express-session to your app\n")
    }
    for (let i = 1; i <= 100; i++) {
        const fakeIP = fakeIPs[i % fakeIPs.length]

        try {
            const res = await fetch(`${BASE_URL}/`, {
                headers: {
                    "X-Forwarded-For": fakeIP,
                    "Cookie":          sessionCookie   
                }
            })

            if (res.status === 429) {
                console.log(`🚨 Request ${i} | IP: ${fakeIP} | BLOCKED 429`)
                console.log("\n✅ ShadowShield is working correctly")
                return
            }

            console.log(`🤖 Request ${i} | IP: ${fakeIP} | status: ${res.status}`)

        } catch (err) {
            console.log(`❌ Request ${i} failed:`, err)
            return
        }

        await sleep(50) // faster = higher rpm = higher risk
    }

    console.log("\n⚠️  Bot completed without being blocked — check threshold")
}

botAttack()
