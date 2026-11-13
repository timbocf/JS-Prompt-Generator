// Prompt Generator
// Generates prompts randomly to paste in ComfyUI or Draw Things

// =========================================
// PROMPT GENERATOR
// =========================================

function generateBatch() {
    const artStyle = document.getElementById("getArtStyle");
    const age = document.getElementById("getAge");
    const gender = document.getElementById("getGender");
    const nationality = document.getElementById("getNationality");
    const haircolor = document.getElementById("getHaircolor");
    const hairstyle = document.getElementById("getHairstyle");
    const overallBuild = document.getElementById("getOverallBuild");
    const action = document.getElementById("getAction");
    const result = document.getElementById("result");

    const imagePrompt = `A ${artStyle.value} of a ${age.value}-year-old ${gender.value}, ${action.value}. She has ${haircolor.value} hair Natural anatomy.`;
    result.textContent = imagePrompt;
}

const artStyleSelect = document.getElementById("getArtStyle");
visualPresets.forEach(({ label, value }) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    artStyleSelect.appendChild(option);
});

const nationalitySelect = document.getElementById("getNationality");
nationalityPresets.forEach(({ label, value }) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    nationalitySelect.appendChild(option);
});

const ageSelect = document.getElementById("getAge");
agePresets.forEach(age => {
    const option = document.createElement("option");
    option.value = age;
    option.textContent = age;
    ageSelect.appendChild(option);
});

const haircolorSelect = document.getElementById("getHaircolor");
haircolorPresets.forEach(haircolor => {
    const option = document.createElement("option");
    option.value = haircolor;
    option.textContent = haircolor;
    haircolorSelect.appendChild(option);
});

const genderSelect = document.getElementById("getGender");
genderPresets.forEach(({ label, value }) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    genderSelect.appendChild(option);
});

const hairstyleSelect = document.getElementById("getHairstyle");
hairstylePresets.forEach(({ label, value }) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    hairstyleSelect.appendChild(option);
});

const overallBuildSelect = document.getElementById("getOverallBuild");
overallBuildPresets.forEach(({ label, value }) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    overallBuildSelect.appendChild(option);
});

const heightSelect = document.getElementById("getHeight");
heightPresets.forEach(({ label, value }) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    heightSelect.appendChild(option);
});

const specificBodySelect = document.getElementById("getSpecificBody");
specificBodyPresets.forEach(({ label, value }) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    specificBodySelect.appendChild(option);
});

const outfitSelect = document.getElementById("getOutfit");
outfitPresets.forEach(({ label, value }) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    outfitSelect.appendChild(option);
});

const actionSelect = document.getElementById("getAction");
actionPresets.forEach(({ label, value }) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    actionSelect.appendChild(option);
});

generateBatch();