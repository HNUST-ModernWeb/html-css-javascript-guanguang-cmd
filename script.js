// 获取元素
const nameInput = document.getElementById('nameInput');
const bioInput = document.getElementById('bioInput');
const saveBtn = document.getElementById('saveBtn');
const namePreview = document.getElementById('namePreview');
const bioPreview = document.getElementById('bioPreview');
const avatar = document.getElementById('avatar');
const avatarInput = document.getElementById('avatarInput');

// 保存按钮功能
saveBtn.addEventListener('click', () => {
    namePreview.textContent = nameInput.value || '你的名字';
    bioPreview.textContent = bioInput.value || '你的个人简介';
});

// 头像上传预览
avatarInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            avatar.src = event.target.result;
        };
        reader.readAsDataURL(file);
    }
});
