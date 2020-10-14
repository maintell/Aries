{"ColumnName":"InstanceID","SqlType":"System.Guid","IsAutoIncrement":false,"IsCanNull":false,"MaxSize":36,"Scale":0,"IsPrimaryKey":true,"DefaultValue":"[#GUID]","Description":"����ʵ��ID","TableName":"WF_Instance","IsUniqueKey":false,"IsForeignKey":false,"FKTableName":""},
{"ColumnName":"OpenBizDate","SqlType":"System.String","IsAutoIncrement":false,"IsCanNull":false,"MaxSize":10,"Scale":0,"IsPrimaryKey":false,"DefaultValue":"","Description":"��������","TableName":"WF_Instance","IsUniqueKey":false,"IsForeignKey":false,"FKTableName":""},
{"ColumnName":"WorkflowID","SqlType":"System.Guid","IsAutoIncrement":false,"IsCanNull":false,"MaxSize":36,"Scale":0,"IsPrimaryKey":false,"DefaultValue":"[#GUID]","Description":"���̶���ID","TableName":"WF_Instance","IsUniqueKey":false,"IsForeignKey":false,"FKTableName":""},
{"ColumnName":"AppID","SqlType":"System.String","IsAutoIncrement":false,"IsCanNull":false,"MaxSize":50,"Scale":0,"IsPrimaryKey":false,"DefaultValue":"","Description":"����Ӧ��ID","TableName":"WF_Instance","IsUniqueKey":false,"IsForeignKey":false,"FKTableName":""},
{"ColumnName":"StartTime","SqlType":"System.DateTime","IsAutoIncrement":false,"IsCanNull":false,"MaxSize":23,"Scale":3,"IsPrimaryKey":false,"DefaultValue":"","Description":"����ʵ������ʱ��","TableName":"WF_Instance","IsUniqueKey":false,"IsForeignKey":false,"FKTableName":""},
{"ColumnName":"FinishTime","SqlType":"System.DateTime","IsAutoIncrement":false,"IsCanNull":true,"MaxSize":23,"Scale":3,"IsPrimaryKey":false,"DefaultValue":"","Description":"����ʵ�����ʱ��","TableName":"WF_Instance","IsUniqueKey":false,"IsForeignKey":false,"FKTableName":""},
{"ColumnName":"SheetID","SqlType":"System.String","IsAutoIncrement":false,"IsCanNull":true,"MaxSize":100,"Scale":0,"IsPrimaryKey":false,"DefaultValue":"","Description":"������","TableName":"WF_Instance","IsUniqueKey":false,"IsForeignKey":false,"FKTableName":""},
{"ColumnName":"FormID","SqlType":"System.String","IsAutoIncrement":false,"IsCanNull":true,"MaxSize":50,"Scale":0,"IsPrimaryKey":false,"DefaultValue":"","Description":"��������ID","TableName":"WF_Instance","IsUniqueKey":false,"IsForeignKey":false,"FKTableName":""},
{"ColumnName":"InstanceState","SqlType":"System.Int32","IsAutoIncrement":false,"IsCanNull":false,"MaxSize":10,"Scale":0,"IsPrimaryKey":false,"DefaultValue":"0","Description":"0:��壨δ����ʵ��ʱ����1����ʼ���ݸ壩״̬��2�����������У�3����������ɣ�4�������� ��5���˻��ᵥ�� 99������ȡ�����ϣ�100����ɾ��","TableName":"WF_Instance","IsUniqueKey":false,"IsForeignKey":false,"FKTableName":""},
{"ColumnName":"CreatorID","SqlType":"System.String","IsAutoIncrement":false,"IsCanNull":false,"MaxSize":50,"Scale":0,"IsPrimaryKey":false,"DefaultValue":"","Description":"������ID","TableName":"WF_Instance","IsUniqueKey":false,"IsForeignKey":false,"FKTableName":""},
{"ColumnName":"Creator","SqlType":"System.String","IsAutoIncrement":false,"IsCanNull":false,"MaxSize":50,"Scale":0,"IsPrimaryKey":false,"DefaultValue":"","Description":"�������û���","TableName":"WF_Instance","IsUniqueKey":false,"IsForeignKey":false,"FKTableName":""},
{"ColumnName":"CreatorFullName","SqlType":"System.String","IsAutoIncrement":false,"IsCanNull":true,"MaxSize":50,"Scale":0,"IsPrimaryKey":false,"DefaultValue":"","Description":"����������","TableName":"WF_Instance","IsUniqueKey":false,"IsForeignKey":false,"FKTableName":""},
{"ColumnName":"CreatorOrgID","SqlType":"System.String","IsAutoIncrement":false,"IsCanNull":false,"MaxSize":50,"Scale":0,"IsPrimaryKey":false,"DefaultValue":"","Description":"�����˲���ID","TableName":"WF_Instance","IsUniqueKey":false,"IsForeignKey":false,"FKTableName":""},
{"ColumnName":"CreatorOrgName","SqlType":"System.String","IsAutoIncrement":false,"IsCanNull":true,"MaxSize":50,"Scale":0,"IsPrimaryKey":false,"DefaultValue":"","Description":"�����˲�������","TableName":"WF_Instance","IsUniqueKey":false,"IsForeignKey":false,"FKTableName":""},
{"ColumnName":"InstanceTitle","SqlType":"System.String","IsAutoIncrement":false,"IsCanNull":false,"MaxSize":200,"Scale":0,"IsPrimaryKey":false,"DefaultValue":"","Description":"����ʵ������","TableName":"WF_Instance","IsUniqueKey":false,"IsForeignKey":false,"FKTableName":""},
{"ColumnName":"Urgency","SqlType":"System.Byte","IsAutoIncrement":false,"IsCanNull":true,"MaxSize":3,"Scale":0,"IsPrimaryKey":false,"DefaultValue":"0","Description":"�����̶�:0��һ��1������2���ر����3�������   ","TableName":"WF_Instance","IsUniqueKey":false,"IsForeignKey":false,"FKTableName":""},
{"ColumnName":"Importance","SqlType":"System.Byte","IsAutoIncrement":false,"IsCanNull":true,"MaxSize":3,"Scale":0,"IsPrimaryKey":false,"DefaultValue":"","Description":"��Ҫ����0��һ�� 1����Ҫ 2���ر���Ҫ   ","TableName":"WF_Instance","IsUniqueKey":false,"IsForeignKey":false,"FKTableName":""},
{"ColumnName":"MainInstanceID","SqlType":"System.String","IsAutoIncrement":false,"IsCanNull":true,"MaxSize":50,"Scale":0,"IsPrimaryKey":false,"DefaultValue":"","Description":"","TableName":"WF_Instance","IsUniqueKey":false,"IsForeignKey":false,"FKTableName":""},
{"ColumnName":"MainActivityInstanceID","SqlType":"System.String","IsAutoIncrement":false,"IsCanNull":true,"MaxSize":50,"Scale":0,"IsPrimaryKey":false,"DefaultValue":"","Description":"","TableName":"WF_Instance","IsUniqueKey":false,"IsForeignKey":false,"FKTableName":""}