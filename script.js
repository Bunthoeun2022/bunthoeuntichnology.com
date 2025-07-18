 document.addEventListener('DOMContentLoaded', () => {
            const navLinks = document.querySelectorAll('.nav-link');
            const pages = document.querySelectorAll('.page-content');
            let aiNewsInterval = null;

            // --- JavaScript សម្រាប់ផ្ទៃខាងក្រោយរូបមន្តគណិតវិទ្យា ---
            const background = document.getElementById('math-background');
            const formulas = ['E=mc²', 'a²+b²=c²', 'Σ', '∫', 'ƒ(x)', '∂', '√', 'π', '∞', '∇', '∀', '∃', '∯', '∰'];
            const colors = ['#38bdf8', '#ffffff', '#a78bfa', '#f472b6', '#fb923c', '#a3e635', '#4ade80'];

            function createSymbol() {
                const symbol = document.createElement('span');
                symbol.classList.add('math-symbol');
                symbol.textContent = formulas[Math.floor(Math.random() * formulas.length)];
                
                symbol.style.fontSize = `${Math.random() * 1.5 + 0.5}rem`;
                symbol.style.color = colors[Math.floor(Math.random() * colors.length)];
                symbol.style.opacity = Math.random() * 0.5 + 0.2;
                const duration = Math.random() * 20 + 15;
                symbol.style.animationDuration = `${duration}s`;

                const side = Math.floor(Math.random() * 4);

                switch(side) {
                    case 0:
                        symbol.style.bottom = '-100px';
                        symbol.style.left = `${Math.random() * 100}vw`;
                        symbol.style.animationName = 'floatUp';
                        break;
                    case 1:
                        symbol.style.top = '-100px';
                        symbol.style.left = `${Math.random() * 100}vw`;
                        symbol.style.animationName = 'floatDown';
                        break;
                    case 2:
                        symbol.style.left = '-100px';
                        symbol.style.top = `${Math.random() * 100}vh`;
                        symbol.style.animationName = 'floatRight';
                        break;
                    case 3:
                        symbol.style.right = '-100px';
                        symbol.style.top = `${Math.random() * 100}vh`;
                        symbol.style.animationName = 'floatLeft';
                        break;
                }
                
                background.appendChild(symbol);

                setTimeout(() => {
                    symbol.remove();
                }, duration * 1000);
            }

            setInterval(createSymbol, 300);


            // --- Slider សម្រាប់ផ្ទាំងព័ត៌មាន AI ---
            const aiNewsData = [
                {
                    id: "ai-google",
                    title: "ព័ត៌មាន AI ចុងក្រោយ៖ ម៉ូឌែលភាសាថ្មីរបស់ Google",
                    image: "https://placehold.co/1920x1080/0f172a/94a3b8?text=Google+AI",
                    description: "ក្រុមហ៊ុន Google បានប្រកាសចេញនូវម៉ូឌែលភាសាជំនាន់ថ្មី ដែលមានសមត្ថភាពយល់ និងបង្កើតអត្ថបទបានយ៉ាងស្មុគស្មាញជាងមុន។",
                    fullText: "អត្ថបទពេញលេញអំពីម៉ូឌែលភាសាថ្មីរបស់ Google... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                },
                {
                    id: "ai-health",
                    title: "ការប្រើប្រាស់ AI នៅក្នុងវិស័យសុខាភិបាល",
                    image: "https://placehold.co/1920x1080/0f172a/60a5fa?text=AI+in+Health",
                    description: "បច្ចេកវិទ្យា AI កំពុងជួយគ្រូពេទ្យក្នុងការវិភាគរោគសញ្ញា និងព្យាបាលជំងឺបានកាន់តែមានប្រសិទ្ធភាពជាងមុន។",
                    fullText: "អត្ថបទពេញលេញអំពីការប្រើប្រាស់ AI ក្នុងវិស័យសុខាភិបាល... Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                },
                {
                    id: "ai-work",
                    title: "តើ AI នឹងផ្លាស់ប្តូរការងារយ៉ាងដូចម្តេច?",
                    image: "https://placehold.co/1920x1080/0f172a/f472b6?text=Future+of+Work",
                    description: "អ្នកជំនាញជាច្រើនជឿជាក់ថា AI នឹងបង្កើតឱកាសការងារថ្មីៗជាច្រើន។",
                    fullText: "អត្ថបទពេញលេញអំពីអនាគតនៃការងារ... Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
                }
            ];
            let currentNewsIndex = 0;
            const aiNewsContent = document.getElementById('ai-news-content');
            const aiNewsTitle = document.getElementById('ai-news-title');
            const aiNewsImage = document.getElementById('ai-news-image');
            const aiNewsDescription = document.getElementById('ai-news-description');
            const aiNewsLink = document.getElementById('ai-news-link');

            function updateAiNewsContent() {
                if (!aiNewsContent) return;
                const news = aiNewsData[currentNewsIndex];
                aiNewsTitle.textContent = news.title;
                aiNewsImage.src = news.image;
                aiNewsDescription.textContent = news.description;
                aiNewsLink.dataset.contentId = news.id;
            }

            function cycleAiNews() {
                if (!aiNewsContent) return;
                aiNewsContent.style.opacity = '0';
                setTimeout(() => {
                    currentNewsIndex = (currentNewsIndex + 1) % aiNewsData.length;
                    updateAiNewsContent();
                    aiNewsContent.style.opacity = '1';
                }, 500);
            }

            function startAiNewsCycle() {
                if (aiNewsInterval) clearInterval(aiNewsInterval);
                updateAiNewsContent();
                aiNewsInterval = setInterval(cycleAiNews, 10000);
            }

            function stopAiNewsCycle() {
                clearInterval(aiNewsInterval);
                aiNewsInterval = null;
            }

            // --- ប្រព័ន្ធគ្រប់គ្រងផ្ទាំង (Tab System) ---
            function showPage(pageId) {
                stopAiNewsCycle();
                pages.forEach(page => page.classList.remove('active'));
                navLinks.forEach(link => link.classList.remove('active'));
                const targetPage = document.getElementById(pageId);
                const targetLink = document.querySelector(`a[href="#${pageId}"]`);
                if (targetPage) targetPage.classList.add('active');
                if (targetLink) targetLink.classList.add('active');
                if (pageId === 'ai-news') {
                    startAiNewsCycle();
                }
            }

            showPage('home');

            navLinks.forEach(link => {
                link.addEventListener('click', function(event) {
                    event.preventDefault();
                    const pageId = this.getAttribute('href').substring(1);
                    showPage(pageId);
                });
            });

            // --- JavaScript សម្រាប់ Content Modal ---
            const contentModal = document.getElementById('content-modal');
            const modalTitle = document.getElementById('modal-title');
            const modalBody = document.getElementById('modal-body');
            const modalCloseBtn = document.getElementById('modal-close-btn');

            const fullContent = {
                'video-iphone': {
                    title: 'វីដេអូពេញ៖ ការត្រួតពិនិត្យមើល iPhone 16 Pro Max',
                    type: 'video',
                    content: 'https://www.youtube.com/watch?v=EAFXa_M4rDA&t=143s&ab_channel=RoatBunthoeun%28Technology%29',
                    description: 'ការពិនិត្យលម្អិតអំពី iPhone 16 Pro Max, រួមមានការរចនា, កាមេរ៉ា, និងประสิทธิภาพ។'
                },
                'review-laptop': {
                    title: 'ពេញលេញ៖ រូបភាពបច្ចេកវិទ្យាសម្រាប់ឆ្នាំ 2025',
                    type: 'article',
                    image: 'https://placehold.co/1920x1080/0f172a/f472b6?text=Laptop+Review',
                    description: 'អត្ថបទពេញលេញ... Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'
                },
                'doc-pdf': {
                    title: 'របាយការណ៍ប្រចាំឆ្នាំ២០២៥ (PDF)',
                    type: 'document',
                    content: '<iframe src="https://drive.google.com/file/d/12Fx1JZR64jq3NmRquKr4-wT-WZtXl_9s/view?usp=sharing" class="w-full h-full rounded-lg"></iframe>'
                },
                'doc-ppt': {
                    title: 'បទបង្ហាញ៖ អនាគត 5G (PowerPoint)',
                    type: 'document',
                    content: '<div class="relative w-full h-full"><iframe src="https://docs.google.com/presentation/d/1tsDLjJap17T7DJx380YStJY-QPn0awOb/edit?usp=sharing&ouid=109617653389541770153&rtpof=true&sd=true" class="w-full h-full rounded-lg"></iframe><div class="absolute top-0 left-0 right-0 h-10"></div></div>'
                },
                'doc-word': {
                    title: 'Cloud Computing (Word)',
                    type: 'document',
                    content: '<div class="relative w-full h-full"><iframe src="https://docs.google.com/document/d/1pijQGv6Q8jyl7AWaSaAFJDIAnENTwaPn/edit?usp=sharing&ouid=109617653389541770153&rtpof=true&sd=true" class="w-full h-full rounded-lg"></iframe><div class="absolute top-0 left-0 right-0 h-10"></div></div>'
                },
                ...Object.fromEntries(aiNewsData.map(item => [item.id, {
                    title: item.title,
                    type: 'article',
                    image: item.image,
                    description: item.fullText
                }]))
            };

            function openModal(contentId) {
                const content = fullContent[contentId];
                if (!content) return;

                modalTitle.textContent = content.title;
                let bodyHtml = '';

                if (content.type === 'video') {
                    bodyHtml = `
                        <div class="embed-container bg-black rounded-lg mb-4">
                            <iframe src="${content.content}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <p class="text-slate-300">${content.description}</p>
                    `;
                } else if (content.type === 'article') {
                    bodyHtml = `
                        <img src="${content.image}" alt="${content.title}" class="w-full h-auto max-h-96 object-cover rounded-lg mb-4">
                        <p class="text-slate-300">${content.description}</p>
                    `;
                } else if (content.type === 'document') {
                    bodyHtml = `<div class="w-full h-[70vh]">${content.content}</div>`;
                }
                modalBody.innerHTML = bodyHtml;
                contentModal.classList.remove('hidden');
                contentModal.classList.add('flex');
            }

            function closeModal() {
                modalBody.innerHTML = ''; // Clear content to stop video playback
                contentModal.classList.add('hidden');
                contentModal.classList.remove('flex');
            }

            document.addEventListener('click', (e) => {
                if (e.target.closest('.content-link')) {
                    e.preventDefault();
                    const contentId = e.target.closest('.content-link').dataset.contentId;
                    openModal(contentId);
                }
            });

            modalCloseBtn.addEventListener('click', closeModal);
            contentModal.addEventListener('click', (e) => {
                if (e.target === contentModal) {
                    closeModal();
                }
            });
        });