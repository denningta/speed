"use client"

import { Command } from "@tauri-apps/plugin-shell"

const RunCommand = () => {

  const handleClick = async () => {
    const command = Command.sidecar('binaries/playwright-app', ['run'])
    const output = await command.execute()
    console.log(output)
  }


  return (
    <div>
      <button onClick={handleClick}>Run</button>
    </div>
  )

}

export default RunCommand
