
/*src Ŀ¼ΪԴ�룬 build ���ڵ��ԣ�dist Ϊ������ļ� */


src>script �� Ŀ¼�ṹ
    config   ·��
        dict.js
        router.js ·�������ļ�
    controller  ���Ʋ�
    direvtive  ָ��

src>view��Ŀ¼�ṹ
	>template
		positionList  ְλ�б�
	position.html  		ְλ����

1. ���ļ����貿��

2. �Ȱ�װ package.json �е�nodeģ�� npm install

������Ҫȫ�ְ�װ gulp���� 
npm i -g gulp

3. Ȼ��װ bower.json �е�ģ�� bower install 

��Ҫȫ�ְ�װbower  
npm i -g bower 


4. ����ʱ��Ҫ���� gulp ���� �������벢��ʵ�б���   

gulp

5. srcĿ¼�е� data �ļ���Ϊ�����ݣ�ֱ�ӷ��õ���Ŀ�� src Ŀ¼���ɡ�

6. ���������http://localhost:1234/

[�ڰ�װnode ģ��� ��ֻ��Ҫ��װ gulp ����  �� ����
npm install gulp -g  // ��������װ��ȫ�ֱ�������
npm install gulp -save  // ��Ŀ�ļ��н��������ͨ�����ص����������а�װ
gulp // �����д����gulpfile�Ļ����������������Զ���ȥͬ����
]


��������

view>template ������һ��html�ļ�
script>directive, ����һ��js�ű�
style>template , ����һ��css�ļ�


git�ϴ���Ŀ  ָ��
	echo "# angularjs-demo" >> README.md
	git init
	git add README.md
	git commit -m "first commit"
	git remote add origin https://github.com/huangyaqin/angularjs-demo.git
	git push -u origin master



