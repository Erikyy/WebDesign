


export let IsDebugEnabled = false;

export default function SetDebugView(enabled: boolean) {
    console.log(enabled ? "Enabling debug mode" : "Disabling debug mode");
    IsDebugEnabled = enabled;
}