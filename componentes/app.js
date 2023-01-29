import React from "react"
import { createRoot } from 'react-dom/client'
import LikeButton from "./like_button.js"

const container = document.getElementById('app')
const root = createRoot(container)

root.render(<LikeButton token={ token }/>)