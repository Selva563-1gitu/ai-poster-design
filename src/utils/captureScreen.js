import html2canvas from 'html2canvas';

export const captureScreen = async (teamName, topic) => {
  const element = document.body;
  const canvas = await html2canvas(element);
  const dataUrl = canvas.toDataURL();

  console.log("Captured for:", teamName);
  console.log("Topic:", topic);
  console.log("Screenshot Data URL:", dataUrl);

  // Download the screenshot
  const a = document.createElement("a");
  a.href = dataUrl;
  a.download = `${teamName.replace(/\s+/g, '_')}_poster_assignment.png`;
  a.click();
};
