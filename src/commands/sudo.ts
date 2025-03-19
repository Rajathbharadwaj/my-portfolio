export const handleSudo = (args: string[]): string => {
  const responses = [
    "🔒 Access Denied: Premium features require a premium developer! Ready to upgrade? Send job offer to proceed.",
    "🚫 Nice try! But root access to this brain requires a competitive salary package.",
    "⚠️ ERROR: Sudo privileges can be unlocked with the following payment methods:\n  - Competitive salary\n  - Great benefits\n  - Exciting projects\nContact for pricing details!",
    "🤔 Hmm... Administrative access requires employment contract. Interested in discussing terms?",
    "💼 Sudo access available with job offer! Current bid: Market rate + benefits"
  ];
  
  return responses[Math.floor(Math.random() * responses.length)];
};