import React from 'react'
import { useRouter } from 'next/router'

function Project() {
    const router = useRouter()
    const { proname } = router.query

    return (
        <div>Project: {proname}</div>
    )
}

export default Project